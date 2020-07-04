const { series, rimraf, mkdirp, concurrent } = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps local',
    local: {
      description: 'Scripts to run the micro frontend locally for development and demonstration',
      default: concurrent({ microui: 'npx nps local.microui', server: 'npx nps local.lambda' }),
      microui: series(mkdirp('.microui'), "npx webpack --watch --config ./webpack.config.js"),
      lambda: {
        default: 'npx nps local.lambda.watch',
        watch: 'nodemon --watch src --exec npx nps local.lambda.build',
        build: "babel-node --extensions '.jsx,.js' --config-file ./babel.lambda.config.json src/local.js"
      }
    },
    build: {
      description: 'Builds Micro UI for lambda deployment',
      default: series('npx nps clean', 'npx nps build.routes', 'npx nps build.microui'),
      routes: `npx babel src --extensions '.ts,.tsx,.js' --config-file ./babel.lambda.config.json --out-dir ./.lambda`,
      microui: series(mkdirp('.microui'), `npx webpack --config ./webpack.config.js`),
    },
    bundle: {
      description: 'Bundles Micro UI for lambda deployment',
      default: series(rimraf('./microui.zip'), 'npx nps build'),
      zip: 'zip -r microui.zip microui.config.js .lambda .microui node_modules',
    },
    clean: {
      description: 'Deletes the various generated folders',
      script: series(rimraf('./.lambda'), rimraf('./.microui')),
    },
  },
};
