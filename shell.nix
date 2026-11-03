let
  pkgs = import <nixpkgs> {
    config = { };
    overlays = [ ];
  };
in
pkgs.mkShell {
  packages = [
    pkgs.nodejs
  ];
}
