Package.describe({
  summary: "Adds famous dead people to the Meteor.users collection.",
  version: "1.7.2",
  name: "clinical:accounts-famous-dead-people",
  git: "http://github.com/awatson1978/accounts-famous-dead-people.git"
});

Package.on_use(function (api) {
  api.versionsFrom('1.4');
  
  api.use('random');
  api.use('ecmascript@0.13.0');
  api.use('meteor-base@1.4.0');

  api.use('clinical:hl7-fhir-data-infrastructure@6.14.2');

  api.addFiles('avatars/ada.lovelace.jpg', "client", {isAsset: true});
  api.addFiles('avatars/alan.turing.jpg', "client", {isAsset: true});
  api.addFiles('avatars/alexis.carrel.jpg', "client", {isAsset: true});
  api.addFiles('avatars/edward.doisy.jpg', "client", {isAsset: true});
  api.addFiles('avatars/edward.tatum.jpg', "client", {isAsset: true});
  api.addFiles('avatars/florence.nightingale.jpg', "client", {isAsset: true});
  api.addFiles('avatars/galen.jpg', "client", {isAsset: true});
  api.addFiles('avatars/george.beadle.jpg', "client", {isAsset: true});
  api.addFiles('avatars/george.wald.jpg', "client", {isAsset: true});
  api.addFiles('avatars/george.washington.carver.jpg', "client", {isAsset: true});
  api.addFiles('avatars/hermann.muller.jpg', "client", {isAsset: true});
  api.addFiles('avatars/hygea.jpg', "client", {isAsset: true});
  api.addFiles('avatars/james.watson.jpg', "client", {isAsset: true});
  api.addFiles('avatars/john.eccles.jpg', "client", {isAsset: true});
  api.addFiles('avatars/kurt.vonnegut.jpg', "client", {isAsset: true});
  api.addFiles('avatars/madam.curie.jpg', "client", {isAsset: true});
  api.addFiles('avatars/mary.shelley.jpg', "client", {isAsset: true});
  api.addFiles('avatars/mother.teresa.jpg', "client", {isAsset: true});
  api.addFiles('avatars/octavia.butler.jpg', "client", {isAsset: true});
  api.addFiles('avatars/roger.sperry.jpg', "client", {isAsset: true});
  api.addFiles('avatars/samuel.clemens.jpg', "client", {isAsset: true});


  api.addFiles('avatars/rosalind.franklin.jpg', "client", {isAsset: true});
  api.addFiles('avatars/nicola.tesla.jpg', "client", {isAsset: true});
  api.addFiles('avatars/grace.hopper.jpg', "client", {isAsset: true});
  api.addFiles('avatars/carl.gauss.jpg', "client", {isAsset: true});
  api.addFiles('avatars/claude.shannon.jpg', "client", {isAsset: true});
  api.addFiles('avatars/barbara.mcclintock.jpg', "client", {isAsset: true});
  api.addFiles('avatars/gertrude.elion.jpg', "client", {isAsset: true});
  api.addFiles('avatars/rachel.carson.jpg', "client", {isAsset: true});
  api.addFiles('avatars/maria.mayer.jpg', "client", {isAsset: true});
  api.addFiles('avatars/rita.levi.montalcini.jpg', "client", {isAsset: true});
  api.addFiles('avatars/elizabeth.blackwell.jpg', "client", {isAsset: true});

  api.addFiles('server/initialize.js', 'server');

  api.addFiles('lib/Characters.js');

  api.export('Characters');

});


Npm.depends({
  "moment": "2.22.2",
  "lodash": "4.17.4",
  "faker": "5.1.0"
})
