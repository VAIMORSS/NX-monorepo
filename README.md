# NX-monorepo

- A sample counter NX-monorepo with the web, mobile and redux 

# How to Run apps
1. run `yarn` command in the root
2. to run any package run `npx nx run <app name>:serve` in root directory
3. To run mobile app run command `npx nx run-<platform - ios || android> <package name : in our repo it is mobile>`


# How to add Package
1. To generate Libs : npx nx g @nrwl/<type>:lib <name of lib>
2. To generate Apps : npx nx g @nrwl/<type>:lib <name of app>

Refer : https://nx.dev/l/a/tutorial/08-create-libs for better understanding
