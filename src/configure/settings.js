export const settings = {
  projects: [
    {
      name: "dev-portfolio-app",
      title: "Developers Portfolio",
      summary:
        "A stand-alone React-based developers portfolio website, " +
        "taking all data from local JSON files and displaying live " +
        "information about your Github repositories (using their GraphGL " +
        "API). Has sections for Experience, Skills and more. Fully Responsive" +
        " design.",
      image: "assets/images/dev-portfolio.png",
      github: "seapagan/dev-portfolio-app",
      website: "https://www.gnramsay.com",
      tech: "React JS",
    },
    {
      name: "grantramsay.dev",
      title: "Website : www.grantramsay.dev",
      summary:
        "React code for this website. Take a list of projects from a config " +
        "file and list them on the page with links, image, summary etc. " +
        "Responsive design.",
      github: "gnramsay/grantramsay.dev",
      website: "https://www.grantramsay.dev",
      tech: "React JS",
    },
    {
      name: "myblog",
      title: "Django-based Blog Engine",
      summary:
        "A Django-based Blog engine with Comments, Tags, Likes, Pinned " +
        "Posts,  WYSIWYG Editing and more. Fully Responsive. Still a Work " +
        "in progress with many more features to add.",
      image: "assets/images/django.png",
      github: "seapagan/myblog",
      website: "",
      tech: "Python, Django",
    },
    {
      name: "django-rundevserver",
      title: "Django Addon : RunDevServer",
      summary:
        "A Django Extension to run a configurable Django development server " +
        "from the command line with DEBUG mode automatically enabled, even " +
        "if disabled from the Application settings. Also allows custom port " +
        "and bind address to be specified separate from the production set.",
      image: "assets/images/django.png",
      github: "seapagan/django-rundevserver",
      website: "https://pypi.org/project/django-rundevserver/",
      websiteTitle: "View on Pypi.org",
      tech: "Python, Django",
    },
    {
      name: "vscode-create-python-module",
      title: "VSCode Extension : Create Python Module",
      summary:
        "Basic VSCode extension to create a new empty Python Module. " +
        "Published on the VSCode Marketplace and Open VSX",
      image: "assets/images/vscode.png",
      github: "gnramsay/vscode-create-python-module",
      website:
        "https://marketplace.visualstudio.com/items?itemName=gnramsay.create-python-module",
      websiteTitle: "View on Visual Studio Marketplace",
      tech: "Typescript",
    },
    {
      name: "update_repo",
      title: "Update Repo",
      summary:
        "A Ruby Gem to keep multiple cloned Git Repositories up to " +
        "date. The website code is in the repository and generated from data " +
        "files using Webpack, soon to be re-written in React. About 50% of " +
        "the application is covered by RSpec tests, working to improve that" +
        "figure.",
      github: "seapagan/update_repo",
      website: "https://updaterepo.grantramsay.dev",
      tech: "Ruby, RSpec",
    },
    {
      name: "confoog",
      title: "Confoog",
      summary:
        "A simple Gem to add a YAML configuration file to your Ruby script / " +
        "Gem. This Gem is fully functional and I have been using it in" +
        "several Ruby projects for years with no issues. The Gem is well" +
        "documented on it's own website, the code for which is in the repo.",
      github: "seapagan/confoog",
      tech: "Ruby, Jekyll",
    },
    {
      name: "oot-get",
      title: "OOTS-Get",
      summary:
        "Command-line Python package to download all the comic images for " +
        "the 'Order of the Stick' webcomic. Uses the 'Beautiful Soup' " +
        "package for web-scraping. Option to only check for new comics. " +
        "This was a personal learning-exercise on Python Web-scraping.",
      github: "gnramsay/oots-get",
      website: "",
      tech: "Python",
    },
    {
      name: "linux-comfy-chair",
      title: "Linux Comfy Chair",
      summary:
        "Auto provision a new linux install with scripting tools and other " +
        "handy items inlcuding latest Python, Ruby, Node, Perl and more.",
      github: "seapagan/linux-comfy-chair",
      website: "",
      tech: "Shell script",
    },
  ],
};
