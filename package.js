Package.describe({
  summary: "Adds famous dead people to the Meteor.users collection.",

  // update this value before you run 'meteor publish'
  version: "1.0.3",

  // if this value isn't set, meteor will default to the directory name
  name: "clinical:accounts-famous-dead-people",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-famous-dead-people.git"
});

Package.on_use(function (api) {
  api.versionsFrom('1.0.3.1');

  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.addFiles('initialize.users.js', 'server');

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
});
