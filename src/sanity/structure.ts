import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('category').title('Categorías'),
            ])
        ),
      S.listItem()
        .title('Noticias')
        .child(
          S.list()
            .title('Noticias')
            .items([
              S.documentTypeListItem('noticia').title('Noticias'),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Inventario')
        .child(
          S.list()
            .title('Inventario')
            .items([
              S.documentTypeListItem('terreno').title('Terrenos'),
              S.documentTypeListItem('industrialPark').title('Parques Industriales'),
              S.documentTypeListItem('naveIndustrial').title('Naves Disponibles'),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('author').title('Autores'),
    ])
