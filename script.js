class Parquimetro {
    constructor() {
      this.valor = 0;
      this.tempo = 0;
      this.troco = 0;
      this.intervalo = null;
      this.elementoTempo = document.getElementById("tempo");
      this.elementoTroco = document.getElementById("troco");
      this.inputValor = document.getElementById("valorInserido");
    }

    processarValor() {
      const valorInput = parseFloat(this.inputValor.value);
      if (isNaN(valorInput) || valorInput <= 0) {
        alert("Por favor, insira um valor válido maior que zero.");
        return;
      }

      this.valor = valorInput;
      this.calcularTempoETroco();
      this.atualizarDisplay();
    }

    calcularTempoETroco() {
      if (this.valor >= 3.00) {
        this.tempo = 120;
        this.troco = this.valor - 3.00;
      } else if (this.valor >= 1.75) {
        this.tempo = 60;
        this.troco = this.valor - 1.75;
      } else if (this.valor >= 1.00) {
        this.tempo = 30;
        this.troco = this.valor - 1.00;
      } else {
        this.tempo = 0;
        this.troco = 0;
        alert("Valor insuficiente para tempo de estacionamento.");
      }
    }

    atualizarDisplay() {
      this.elementoTempo.innerText = `Tempo: ${this.tempo} min`;
      this.elementoTroco.innerText = `Troco: R$ ${this.troco.toFixed(2)}`;
    }

    iniciarContagem() {
      if (this.intervalo || this.tempo <= 0) return;

      this.intervalo = setInterval(() => {
        if (this.tempo > 0) {
          this.tempo--;
          this.atualizarDisplay();
        } else {
          clearInterval(this.intervalo);
          this.intervalo = null;
          alert("Tempo esgotado!");
        }
      }, 1000);
    }

    reiniciar() {
      clearInterval(this.intervalo);
      this.valor = 0;
      this.tempo = 0;
      this.troco = 0;
      this.inputValor.value = "";
      this.intervalo = null;
      this.atualizarDisplay();
    }
  }

  const parquimetro = new Parquimetro();
 