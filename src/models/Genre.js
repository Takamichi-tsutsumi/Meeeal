class Genre {};
Genre.schema = {
  name: 'Genre',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string'
  }
};

export Genre;

