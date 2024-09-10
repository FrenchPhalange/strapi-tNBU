module.exports = {
    // beforeCreate(event) {
    //     const { data } = event.params;

    //     if (!data.seo) {
    //         data.seo = {};
    //     }

    //     // Définir metaRobots
    //     data.seo.metaRobots = "index, follow";

    //     // Définir metaViewport
    //     data.seo.metaViewport = "width=device-width, initial-scale=1";

    //     // Définir canonicalURL
    //     if (data.slug) {
    //         data.seo.canonicalURL = `https://romain.up.railway.app/articles/${data.slug}`;
    //     }

    //     // Initialiser structuredData
    //     data.seo.structuredData = JSON.stringify({
    //         "@type": "BlogPosting",
    //         "author": {
    //             "name": "Romain",
    //             "@type": "Person"
    //         },
    //         "@context": "https://schema.org",
    //         "headline": data.title || "Nouvel article de blog",
    //         "description": data.description || "Description de l'article",
    //     });
    // },

    // beforeUpdate(event) {
    //     const { data } = event.params;

    //     if (!data.seo) {
    //         data.seo = {};
    //     }

    //     let structuredData = {};
    //     if (data.seo.structuredData) {
    //         try {
    //             structuredData = JSON.parse(data.seo.structuredData);
    //         } catch (error) {
    //             console.error("Error parsing structuredData:", error);
    //         }
    //     }

    //     // Mettre à jour canonicalURL si le slug change
    //     if (data.slug) {
    //         data.seo.canonicalURL = `https://romain.up.railway.app/articles/${data.slug}`;
    //     }

    //     // Mettre à jour la date de publication si l'article est publié
    //     if (data.publishedAt) {
    //         structuredData.datePublished = new Date(data.publishedAt).toISOString();
    //     }

    //     // Mettre à jour le titre et la description si nécessaire
    //     if (data.title) {
    //         structuredData.headline = data.title;
    //     }
    //     if (data.description) {
    //         structuredData.description = data.description;
    //     }

    //     // Sauvegarder les modifications de structuredData
    //     data.seo.structuredData = JSON.stringify(structuredData);
    // }
};