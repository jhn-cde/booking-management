class Controller {
  constructor(service) {
    this.service = service;
  }

  async getAll( req, res, next ) {
    try {
      const response = await this.service.getAll( req.query );

      return res.send(response);
    } catch (e) {
      next(e);
    }
  }

  async get( req, res, next ) {
    const { id } = req.params;
    if(!id){
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':id' can not be empty" },
    });
    return;
    }

    try {
      const response = await this.service.get( id );

      return res.send(response);
    } catch ( e ) {
      next(e);
    }
  }

  async insert( req, res, next ) {
    const { body } = req;
    try {
      const response = await this.service.insert( body );

      return res.status(201).send(response);
    } catch ( e ) {
      next( e );
    }
  }

  async update( req, res, next ) {
    const { id } = req.params;
    const { body } = req;

    try {
      const response = await this.service.update( id, body );

      return res.send({ status: "OK", data: response });
    } catch ( e ) {
      next( e );
    }
  }

  async delete( req, res, next ) {
    const { id } = req.params;

    try {
      const response = await this.service.delete( id );

      return res.status(204).send({ status: "OK", data: response });
    } catch ( e ) {
      next( e );
    }
  }
}

module.exports = Controller