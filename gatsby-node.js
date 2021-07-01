const path = require(`path`);

exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      query {
        malariaone {
          allParameters {
            nodes {
              id
              name
              definition
              dateUpdated
              dateCreated
              userCreated
              userUpdated
              status
              type
            }
          }
        }
      }
    `
  );
  console.log(JSON.stringify(result, null, 4));
  result.data.malariaone.allParameters.nodes.forEach((node) => {
    createPage({
      path: `/param/${node.id}`,
      component: path.resolve(`./src/pages/param/[id].js`),
      context: {
        ...node,
      },
    });
  });
};
