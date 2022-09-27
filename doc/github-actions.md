# Deployment with GitHub Actions

GitHub is the home of Safetag's project code. The site is build and deployed through the GitHub Actions feature and is then hosted at GitHub Pages.

The build and deployment process is fully automated as workflows in GitHub Actions. There are two main workflows:
- The **production workflow**, which builds the site from the main branch and deploys it to safetag.org
- The **staging workflow**, which builds the site from the development branch and deploys it to dev.safetag.org

Both workflows are automatically run when a commit is pushed, but they can also be manually run by selecting the relevant workflow in the project's [Actions page](https://github.com/SAFETAG/SAFETAG/actions/) and clicking the _Run workflow_ button.

The build process for both workflows is identical:
- cancel any previous workflows still running
- download and install project code and dependencies
- check for code errors
- update translations from Transifex
- deploy to GitHub Pages

Additionally, there is a Lint and Test workflow that checks for code consistency and errors before firing the build workflows, in case there is any problem.

The workflows are defined as `.yml` files inside the `.github/workflows` project directory.
