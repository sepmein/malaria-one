# Malaria One

A website dedicated to illustrate the malaria models.

## Get start for developper
0. Prerequiste
Skip if you have already done so.
Install `postgresql` `git` and `nodejs` into your system.

For example, on `Macos`:

`
brew install postgresql node git
`

1. Clone this project:

`
git clone https://github.com/sepmein/malaria-one.git
`

2. Install dependencies

cd to the project folder, then 
`
npm install gatsby-cli -g
npm install
`

3. Start the project
Start `postgres` service, for example on `Macos`:
`
brew service start postgres
`

Start `gatsby` server
`
gatsby develop
`

Start the `directus` server
`
cd db
npx directus start
`

Start `postgraphile` to expose the graphql api
`
npx postgraphile -c 'postgres://localhost/malariaone' --watch --enhance-graphiql --dynamic-json
`

If you want to change **malariaone** to other string, change it here, and also remember to change it in the `gatsby.config` file.
