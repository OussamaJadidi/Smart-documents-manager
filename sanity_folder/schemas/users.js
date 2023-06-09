import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
      name: 'nom',
      title: 'Nom',
      type: 'string',
    }),
    defineField({
        name: 'prenom',
        title: 'Prenom',
        type: 'string',
    }),
    defineField({
        name: 'ppr',
        title: 'P.P.R',
        type: 'number',
    }),
    defineField({
        name: 'cnt',
        title: 'C.N.T',
        type: 'number',
    }),
    defineField({
        name: 'cin',
        title: 'CIN',
        type: 'string',
    }),
    defineField({
        name: 'grade',
        title: 'Grade',
        type: 'number',
    }),
    defineField({
        name: 'echelle',
        title: 'Echelle',
        type: 'number',
    }),
    defineField({
        name: 'echelon',
        title: 'Echelon',
        type: 'number',
    }),
    defineField({
        name: 'service',
        title: 'Service',
        type: 'string',
    }),
    defineField({
        name: 'option',
        title: 'Option',
        type: 'string',
    }),
    defineField({
        name: 'addresse',
        title: 'Adresse',
        type: 'string',
    }),
    defineField({
        name: 'sex',
        title: 'Sex',
        type: 'string',
    }),
    
  ]
})
