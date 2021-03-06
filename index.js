class KnexHelpers {
  constructor(db, table) {
    this.db = db;
    this.table = table;
  }

  find(selectConfig = "*") {
    return this.db(this.table).select(...selectConfig);
  }

  findById(id, selectConfig = "*", whereConfig = "id") {
    return this.db(this.table)
      .where(whereConfig, id)
      .select(...selectConfig)
      .first();
  }

  findBy(filter, selectConfig = "*") {
    return this.db(this.table)
      .where(filter)
      .select(...selectConfig);
  }

  add(info) {
    return this.db(this.table)
      .insert(info)
      .returning("id")
      .then((res) => {
        return this.findById(res[0]);
      })
      .catch((err) => {
        return err;
      });
  }

  update(changes, filter) {
    return this.db(this.table)
      .where(filter)
      .update(changes)
      .returning("id")
      .then((res) => {
        return this.findById(res[0]);
      })
      .catch((err) => {
        return err;
      });
  }

  remove(filter) {
    return this.db(this.table).where(filter).del();
  }
}

module.exports = KnexHelpers;
