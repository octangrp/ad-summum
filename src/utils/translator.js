class Translator {
  static process(lang = "en_US", array) {
    let translation = this.findTranslation(lang, array)
    return translation.lang ? translation : this.findTranslation("en_US", array)
  }

  static findTranslation(lang, translatable) {
    let translations = translatable.filter((element, i) => {
      return element.lang == lang
    })

    if (translations.length > 0) {
      return translations[0]
    }
    return {}
  }
}

export default Translator
