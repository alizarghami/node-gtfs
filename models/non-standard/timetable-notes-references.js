const model = {
  filenameBase: 'timetable_notes_references',
  nonstandard: true,
  schema: [
    {
      name: 'note_id',
      type: 'varchar(255)',
    },
    {
      name: 'timetable_id',
      type: 'varchar(255)',
      index: true,
    },
    {
      name: 'route_id',
      type: 'varchar(255)',
      index: true,
    },
    {
      name: 'trip_id',
      type: 'varchar(255)',
      index: true,
    },
    {
      name: 'stop_id',
      type: 'varchar(255)',
      index: true,
    },
    {
      name: 'stop_sequence',
      type: 'integer',
      min: 0,
      index: true,
    },
    {
      name: 'show_on_stoptime',
      type: 'integer',
      min: 0,
      max: 1,
    },
  ],
};

export default model;
