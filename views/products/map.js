function(doc) {
  if (doc.listPrice) {
    emit(null, doc);
  }
}
