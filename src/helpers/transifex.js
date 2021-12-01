#!/usr/bin/env node
var Transifex   = require("transifex"),
    path        = require('path'),
    fs          = require('fs'),
    mkpath      = require('mkpath');

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

var projectName = "safetag-overview"
var dirName = "locales/"
var categoryName = 'site-strings'
var transifexOptions = {
    project_slug: projectName,
    credential: `${process.env.TRANSIFEX_USER}:${process.env.TRANSIFEX_PASSWORD}`,
    category: categoryName,
    dir: dirName,
  }

var source_language = false
var transifex = new Transifex(transifexOptions);

// write files by the given path and locale
function writeFile( relPath, strings, locale, callback ) {
  callback = callback || function(){};
  var absPath = path.join(dirName, relPath);
  mkpath(path.dirname(absPath), function( ) {
    fs.writeFile(absPath, strings, { encoding: "utf-8" }, callback);
  });
}

function failed(err) {
  console.error(err);
  process.exit(1);
}

function fetchResource(resource, language) {
  // Download the file for the specified locale
  transifex.translationInstanceMethod(projectName, resource.slug, language,
    function(err, fileContent, type) {
      if (err) {
        throw new Error(err);
      }
      var filename = path.join(language, resource.name + "." + type);
      filename = filename.replace(/_(activities|authors|guide_sections|methods|skills|references|approaches|infos|tools|remote-options)_/, '/$1/')
      // Postprocess the Transifex-delivered content to avoid errors
      fileContent = fileContent.replace(/\npurpose: \n/, '\npurpose: ')
      fileContent = fileContent.replace(/\nsummary: \n/, '\nsummary: ')
      writeFile(filename, fileContent, function( err ) {
        if (err) {
          throw new Error(err);
        }
      });
  });
}

function importFromTransifex(options) {
  // Retrieve all the data e.g. resource names, category names
  transifex.resourcesSetMethod(options.project_slug, function(error, data) {
    if ( error ) {
      failed(error);
    }

    // Retrieve all the supported languages
    transifex.projectInstanceMethods(projectName, function (error, languages) {
      if ( error ) {
        failed(error);
      }

      var index = languages.teams.indexOf(languages.source_language_code);
      // if we select `-s` option then add source language to the list to download
      if(source_language && index < 0) {
        languages.teams.push(languages.source_language_code);
      } else if (!source_language) {
        if (index > -1) {
            languages.teams.splice(index, 1);
        }
      }

      var resources = data
      if(!resources.length) {
        failed("Error: Please check your category name");
      }

      var resourceCount = {}
      languages.teams.forEach(function(language) {
        resourceCount[language] = 0
      })
      resources.forEach(function(resource) {
        languages.teams.forEach(function(language) {
          fetchResource(resource, language)
          resourceCount[language]++
        })
      })
      languages.teams.forEach(function(language) {
        if (resourceCount[language] != resources.length) {
          console.log(`ERROR: Resource count for language "${language}" does not match (has ${resourceCount[language]}, should have ${resources.length})`)
        }
      })
    })
  })
}

function main() {
  importFromTransifex(transifexOptions);
}

if (!module.parent) {
  main();
}
