const livroOriginal = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    ano: 1943,
    resumo: function() {
      return `${this.titulo} foi escrito por ${this.autor} em ${this.ano}.`;
    }
  };
  
  
  const livroCopia = {
    ...livroOriginal, 
    titulo: "O Menino Estrela" 
  };