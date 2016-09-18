# crp-grad-thesis

An Angular 2 application which represents a basic ERP module for small and medium buisness. This module is primarly intended to be used by IT companies since there is a projects specific feature.

## Getting Started

In order to have the fully functional module up and running on your local machine follow the steps in Installing section.

### Prerequisities

node >= v4.x.x & npm  >= v3.x.x

### Installing

The steps to get the development env up & running

1. clone this repo on your local machine
```
git clone https://github.com/marko823/crp-grad-thesis.git crp-module
cd crp-module
```

2. discard all git related files
``` 
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

3. install packages listed under package.json
```
npm install
```

4. transpile the .ts files running the .ts compiler 
```
npm run tsc
npm run tsc:w - watch mode
```

5. start the application (runs the lite-server, a light-weight, static file server)
```
npm run lite
```

NOTE: the current version of the module is based on Angular 2.0.0-rc.6 & will soon be migrated to the 2.0.0


## Authors

* **Martina Kostovska** - *Initial work* - [PurpleBooth](https://github.com/marko823)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
