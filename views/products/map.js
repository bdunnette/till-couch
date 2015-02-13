function(doc) {
  if (doc.listPrice) {
    emit(doc.name,doc);
  }
}