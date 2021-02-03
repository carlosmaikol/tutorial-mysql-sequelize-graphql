const resolvers = {

    Query: {

        async getPersonas(root, args, { models }){
            return await models.persona.findAll()
        },
        async getPersona(root, args, { models }){
            return await models.persona.findByPk(args.id)
        }

    },
    Mutation: {
        async createPersona(root, { nombre, apellido, active }, { models }){
            return await models.persona.create( {nombre, apellido, active} )
        }
    }

}

module.exports = resolvers