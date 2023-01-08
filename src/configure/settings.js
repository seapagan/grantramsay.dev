export const settings = {
  user: {
    name: "Grant Ramsay",
    website: "https://www.gnramsay.com",
  },
  header:
    "Listed below are some of my public projects, spread over 2 separate " +
    "GitHub accounts. some are complete, others still in progress and some " +
    "barely started. Each has a link to the relevant GitHub repository and " +
    "a live example if appliciable. The source code for this page (written " +
    "in React) is available from it's public repository.",
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
    },
    {
      name: "fastapi-template",
      title: "A reusable API template based on FastAPI",
      summary:
        "Configurable template for a FastAPI application, with working " +
        "Authentication and User systems using JWT, and a CLI tool to " +
        "configure it, using Postgresql for a database.",
      image: "assets/images/python.png",
      github: "seapagan/fastapi-template",
      website: "",
      tech: "Python, FastAPI",
    },
    {
      name: "sp-build",
      title: "Webpack-based build-tool for Frontend development",
      summary:
        "This is a setup for plain HTML/CSS/JS coding, when using a Library " +
        "or Framework is too much. It gives a real-time update in " +
        "development mode and optimized, minimized, bundled code for " +
        "production. JS/TS, CSS/SCSS/SASS ready.",
      image: "assets/images/js-logo-small.png",
      github: "seapagan/sp-build",
      website: "https://www.gnramsay.com",
      tech: "Javascript, Webpack",
    },
    {
      name: "shopping-list",
      title: "Shopping list app using vanilla JavaScript.",
      summary:
        "A web-based Shopping List written in plain-vanilla " +
        "JavaScript, using my sp-build system for development and packaging",
      image: "assets/images/js-logo-small.png",
      github: "seapagan/shopping-list",
      website: "https://shopping.seapagan.net",
      tech: "Javascript, Webpack",
    },
    {
      name: "poectrl",
      title: "Control the PoE ports on a Ubiquiti TS-8-PRO Switch.",
      summary:
        "A system to remotely and automatically control the PoE status of " +
        "individual ports on multiple Ubiquiti TS-8-Pro Switch, using " +
        "predefined profiles. Has a CLI and an API to allow applying the " +
        "profiles. Published on PyPi",
      image: "assets/images/python.png",
      github: "seapagan/poectrl",
      website: "https://pypi.org/project/poectrl/",
      websiteTitle: "View on Pypi.org",
      tech: "Python",
    },
    {
      name: "grantramsay.dev",
      title: "Website : 'grantramsay.dev'",
      summary:
        "React code for this website. Take a list of projects from a config " +
        "file and list them on the page with links, image, summary etc. " +
        "Responsive design. Currently quite plain, but I intend to add more " +
        "features shortly including carousels, pull star/fork etc data from " +
        "GitHub and more.",
      github: "gnramsay/grantramsay.dev",
      website: "https://www.grantramsay.dev",
      image: "assets/images/react.png",
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
      name: "uprn-mangle",
      title: "Fast accurate UK address search",
      summary:
        "This is a Django API linked with a React Front-end. Using UPRN " +
        "data from Ordance Survey, it offers a pin-point accurate address " +
        "search with exact GPS location and links to Google Maps & " +
        "OpenStreetMap. This allows navigation to the actual property " +
        "address as opposed to simply the approximate area. The original " +
        "data does not lend itself well to loading into a database, so first " +
        "it is mangled into suitable formats, requiring the filtering and " +
        "merging of dozens of different CSV files. Served using Django Rest " +
        "Framework with lightning fast search. The front end needs updating " +
        "as it was one of my first React attempts.",
      github: "seapagan/uprn-mangle",
      image: "assets/images/django.png",
      website: "",
      tech: "Python, Django, DRF, React",
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
      name: "openapi-readme",
      title: "OpenAPI Readme generator.",
      summary:
        "Generates Markdown suitable for a README file from a local " +
        "openapi.json file. Published to Pypi",
      github: "seapagan/openapi-readme",
      image: "assets/images/python.png",
      website: "https://pypi.org/project/openapi-readme/",
      websiteTitle: "View on Pypi.org",
      tech: "Python",
    },
    {
      name: "linux-comfy-chair",
      title: "Linux Comfy Chair",
      summary:
        "Auto provision a new (Ubuntu) linux install with latest updates, " +
        "scripting tools and other handy items inlcuding latest Python, " +
        "Ruby, Node, Perl and more. " +
        "Great to get a new Virtual Machine or Cloud appliance quickly " +
        "running and updated with no user input.",
      github: "seapagan/linux-comfy-chair",
      website: "",
      tech: "Shell script",
    },
    {
      name: "trekpedia",
      title: "Trekpedia",
      summary:
        "A fun personal project to scrape the 'Star Trek' Wikipedia pages " +
        "and generate JSON files with Series, Season and Episode data. This " +
        "is a live ongoing project, I will be adding more data to the files " +
        "as time permits. Written in Python. The primary point of this data " +
        "is to provide some 'real-world' data to aid in developing API's ",
      github: "gnramsay/trekpedia",
      image: "assets/images/python.png",
      tech: "Python",
    },
    {
      name: "trekpedia-api-rails",
      title: "Rails-based API for the above Trekpedia data",
      summary:
        "A work-in-progress to provide a basic API serving the Trekpedia " +
        "data written in Ruby on Rails. More features will be added shortly. " +
        "I am using this to learn writing API's with Rails.",
      image: "assets/images/rails.png",
      github: "gnramsay/trekpedia-api-rails",

      tech: "Ruby on Rails",
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
      image: "assets/images/python.png",
      website: "https://pypi.org/project/oots-get/",
      websiteTitle: "View on Pypi.org",
      tech: "Python",
    },
    {
      name: "update_repo",
      title: "Update Repo",
      summary:
        "A Ruby Gem to keep multiple locally-cloned Git Repositories up to " +
        "date. The website code is also in the repository and generated from " +
        "data files using Webpack, soon to be re-written in React. About 50% " +
        "of the application is covered by RSpec tests, working to improve " +
        "that figure.",
      github: "seapagan/update_repo",
      website: "https://updaterepo.grantramsay.dev",
      image: "assets/images/ruby.jpg",
      tech: "Ruby, RSpec",
    },
    {
      name: "confoog",
      title: "Confoog",
      summary:
        "A simple Gem to add a YAML configuration file to your Ruby script / " +
        "Gem. This Gem is fully functional and I have been using it in " +
        "several Ruby projects for years with no issues. The Gem is well " +
        "documented on it's own website, the code for which is in the repo.",
      github: "seapagan/confoog",
      website: "https://confoog.grantramsay.dev",
      image: "assets/images/ruby.jpg",
      tech: "Ruby, RSpec, Jekyll",
    },
  ],
};
