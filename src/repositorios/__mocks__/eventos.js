const eventosMock = require("./evento.json");

const moment = require("moment");

class Evento {
  
  listarEventos() {
    return Promise.resolve(eventosMock);
  }

  buscarPorId(id) {
    return Promise.resolve(eventosMock.filter((evento) => evento.id === id));    
  }

  excluir(id) {
    return Promise.resolve(eventosMock.find((evento) => evento.id === id));
  }

  listarEventosAgendados() {
    return Promise.resolve(eventosMock.filter((evento) => {
      const dataAtual = moment();
      const dataInicio = moment(evento.dataInicio);
      return dataInicio.isAfter(dataAtual);
    }
    ));
  }

  listarEventosEmAndamento() {
    return Promise.resolve(eventosMock.filter((evento) => {
      const dataAtual = moment();
      const dataInicio = moment(evento.dataInicio);
      const dataFim = moment(evento.dataFim);
      return dataInicio.isBefore(dataAtual) && dataFim.isAfter(dataAtual);
    }));
  }

  listarEventosFinalizados() {
    return Promise.resolve(eventosMock.filter((evento) => {
      const dataAtual = moment();
      const dataFim = moment(evento.dataFim);
      return dataFim.isBefore(dataAtual);
    }));
  }

  isNomeEventoUtilizado(nome) {
    return Promise.resolve(
      !!eventosMock.find((evento) => evento.nome === nome));  
  }
}

module.exports = new Evento();