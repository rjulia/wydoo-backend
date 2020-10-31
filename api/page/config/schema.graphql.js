const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  query: `
    pageBySlug(id: ID slug: String): Page
  `,
  resolver: {
    Query: {
      pageBySlug: {
        resolverOf: 'page.findOne',
        async resolver(_, { slug }) {
          const entity = await strapi.services.page.findOne({ slug });
          return sanitizeEntity(entity, { model: strapi.models.page });
        },
      },
    },
  },
};
