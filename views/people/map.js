function(doc) {
  if (doc.name && doc.email || doc.phone) {
    emit(null, doc);
  }
}
