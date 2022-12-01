class Service {
  constructor(model) {
    this.model = model;
  }

  async getAll( query ) {
    let { skip, limit, sortby } = query;
  
    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 0;
    sortby = sortby ? sortby : {createdAt: -1};

    delete query.skip;
    delete query.limit;
    delete query.sortby;

    try {
      let allCustomers = await this.model
      .find(query)
      .sort(sortby)
      .skip(skip)
      .limit(limit)
      
      return allCustomers;
    } catch (error) {
      throw error;
    }
  }

  async get( id ) {
    try {
      const item = await this.model.findById( id );

      if ( !item ) {
        const error = new Error( 'Item not found' );

        error.statusCode = 404;
        throw error;
      }

        return item
    } catch ( errors ) {
      throw errors;
    }
  }

  async insert( data ) {
    try {
      const item = await this.model.create( data );

      if ( item ) {
        return item
      }
      throw new Error( 'Something wrong happened' );

    } catch ( error ) {
      throw error;
    }
  }

  async update( id, data ) {
    try {
      const item = await this.model.findByIdAndUpdate( id, data, { 'new': true } );

      return item
    } catch ( errors ) {
      throw errors;
    }
  }

  async delete( id ) {
    try {
      const item = await this.model.findByIdAndDelete( id );

      if ( !item ) {
        const error = new Error( 'Item not found' );

        error.statusCode = 404;
        throw error;
      } else {
        return item
      }
    } catch ( errors ) {
      throw errors;
    }
  }
}

module.exports =  Service
