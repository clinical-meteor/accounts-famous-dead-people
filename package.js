Package.describe({
  summary: "Adds famous dead people to the Meteor.users collection."
});
Package.register_extension(
    "jpg", function (bundle, source_path, serve_path, where) {
        bundle.add_resource({
            type: "static",
            path: '/avatars/' + serve_path.split('/').pop(),
            source_file: source_path,
            where: where
        });
    }
);
Package.on_use(function (api) {
    api.add_files('bootstrap.users.js', 'server');

    api.add_files('famous.dead.people/ada.lovelace.jpg', "client");
    api.add_files('famous.dead.people/alan.turing.jpg', "client");
    api.add_files('famous.dead.people/alexis.carrel.jpg', "client");
    api.add_files('famous.dead.people/edward.doisy.jpg', "client");
    api.add_files('famous.dead.people/edward.tatum.jpg', "client");
    api.add_files('famous.dead.people/florence.nightingale.jpg', "client");
    api.add_files('famous.dead.people/galen.jpg', "client");
    api.add_files('famous.dead.people/george.beadle.jpg', "client");
    api.add_files('famous.dead.people/george.wald.jpg', "client");
    api.add_files('famous.dead.people/george.washington.carver.jpg', "client");
    api.add_files('famous.dead.people/hermann.muller.jpg', "client");
    api.add_files('famous.dead.people/hygea.jpg', "client");
    api.add_files('famous.dead.people/james.watson.jpg', "client");
    api.add_files('famous.dead.people/john.eccles.jpg', "client");
    api.add_files('famous.dead.people/kurt.vonnegut.jpg', "client");
    api.add_files('famous.dead.people/madam.curie.jpg', "client");
    api.add_files('famous.dead.people/mary.shelley.jpg', "client");
    api.add_files('famous.dead.people/mother.teresa.jpg', "client");
    api.add_files('famous.dead.people/octavia.butler.jpg', "client");
    api.add_files('famous.dead.people/roger.sperry.jpg', "client");
    api.add_files('famous.dead.people/samuel.clemens.jpg', "client");


    api.add_files('famous.dead.people/rosalind.franklin.jpg', "client");
    api.add_files('famous.dead.people/nicola.tesla.jpg', "client");
    api.add_files('famous.dead.people/grace.hopper.jpg', "client");
    api.add_files('famous.dead.people/carl.gauss.jpg', "client");
    api.add_files('famous.dead.people/claude.shannon.jpg', "client");
    api.add_files('famous.dead.people/barbara.mcclintock.jpg', "client");
    api.add_files('famous.dead.people/gertrude.elion.jpg', "client");
    api.add_files('famous.dead.people/rachel.carson.jpg', "client");
    api.add_files('famous.dead.people/maria.mayer.jpg', "client");
    api.add_files('famous.dead.people/rita.levi.montalcini.jpg', "client");
    api.add_files('famous.dead.people/elizabeth.blackwell.jpg', "client");
});


