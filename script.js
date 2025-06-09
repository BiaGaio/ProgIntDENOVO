window.onload = function () {
    const tela = document.getElementById("tela");
  
    window.add = function (valor) {
      if (tela.value.length < 20) {
        tela.value += valor;
      }
    };
  
    window.limpar = function () {
      tela.value = "";
    };
  
    window.calcular = function () {
      const expr = tela.value;
  
      if (!/^[\d\.\+\-\*\/\(\)]+$/.test(expr)) {
        tela.value = "Erro";
        return;
      }
  
      let numeros = expr.match(/\d+(\.\d+)?/g);
      if (numeros && !numeros.every(n => {
        let [a, d] = n.split('.');
        return a.length <= 4 && (!d || d.length <= 4);
      })) {
        tela.value = "Máx 4 dígitos";
        return;
      }
  
      try {
        tela.value = eval(expr);
      } catch {
        tela.value = "Erro";
      }
    };
  };
  