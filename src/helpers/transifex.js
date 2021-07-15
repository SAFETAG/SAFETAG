#!/usr/bin/env node
var Transifex   = require("transifex"),
    path        = require('path'),
    fs          = require('fs'),
    mkpath      = require('mkpath');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

var projectName = "safetag-overview"
var dirName = "locales/"
var categoryName = 'site-strings'

var source_language = false,
meta = false;

// write files by the given path and locale
function writeFile( relPath, strings, locale, callback ) {
  callback = callback || function(){};
  var absPath = path.join(dirName, relPath);
  mkpath(path.dirname(absPath), function( err ) {
    if ( err ) {
      return callback( err );
    }
    fs.writeFile(absPath, strings, { encoding: "utf-8" }, callback);
  });
}

function failed(err) {
  console.error(err);
  process.exit(1);
}

function importFromTransifex(options) {
  // Retrieve all the data e.g. resource names, category names
  var transifex = new Transifex(options);
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

      // We are going to iterate through all the languages first before calling the function
      var wait = languages.teams.length;

      // Check if there is more than one resource with the same category
      var resources = data.filter(function(v) {
        if(v.categories !== null) {
          if(v.categories.indexOf(categoryName) !== -1) {
            return true;
          }
        }
      });

      if(!resources.length) {
        failed("Error: Please check your category name");
      }

      var i = resources.length - 1;
      resources.forEach(function(resource) {
        if(meta) {
          transifex.statisticsMethods(projectName, resource.slug, function(err, data) {
            // Write each file with the given filename and content.
            Object.keys(data).forEach(function(language){
              writeFile(path.join(language, "meta-" + resource.name + ".json"), JSON.stringify(data[language], null, 2), function( err ) {
                if (err) {
                  throw new Error(err);
                }
              });
            });
          });
        }

        languages.teams.forEach(function(language) {
          // Request the file for the specified locale then write the file
          transifex.translationInstanceMethod(projectName, resource.slug, language,
            function(err, fileContent, type) {
              if (err) {
                throw new Error(err);
              }
              var filename = path.join(language, resource.name + "." + type);
              wait--;
              // Write each file with the given filename and content.
              writeFile(filename, fileContent, function( err ) {
                if (err) {
                  throw new Error(err);
                }
              });
              if(wait === 0) {
                i--;
                wait = languages.teams.length;
                if(i < 0) {
                  console.log("Transifex: Download completed");
                  process.exit(0);
                }
              }
          });
        });
      });
    });
  });
}

function main() {
  importFromTransifex({
    project_slug: projectName,
    credential: `${process.env.TRANSIFEX_USER}:${process.env.TRANSIFEX_PASSWORD}`,
    category: categoryName,
    dir: dirName,
  });
}

if (!module.parent) {
  main();
}
