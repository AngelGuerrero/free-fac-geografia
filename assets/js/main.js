const vm = new Vue({
  el: '#app',

  data: {
    // 
    // Selecciona la primera vista a elegir, en base al radio button.
    // 
    // Si es el modelo segmentado o el modelo recomendado.
    modeloSeleccionado: '',

    // 
    // Botones para el comportamiento del progreso del usuario.
    // Son las opciones que se iteran para mostrar los pasos
    // que está siguiendo el usuario.
    pasos: [
      { title: 'Modelos', active: true },
      { title: 'Sociodemográficos', active: false },
      { title: 'Comportamiento del cliente', active: false },
      { title: 'Geograficos', active: false },
      { title: 'Datos', active: false },
      { title: 'Formulario', active: false }
    ],

    // 
    // Es la vista que está viendo el usuario
    // Corresponde a el número de paso actual.
    // 
    pasoSeleccionado: 0,

    // 
    // SECCIÓN CATEGORÍA COMPORTAMIENTO CLIENTE
    // 
    // Representan los datos enlazados a los calendarios
    // de la sección de comportamiento cliente
    // 
    fechaUltimaActividadR: new Date(),
    fechaUltimaActividadM: new Date(),
    fechaUltimaActividadT: new Date(),
    fechaUltimoMovimientoA: new Date(),

    // 
    // SECCIÓN DE FORMULARIO
    // 
    fechaInicioCampanaOProyecto: new Date()
  },

  computed: {
    showPrevButton () {
      return this.pasoSeleccionado !== 0
    },

    showNextButton () {
      return this.pasoSeleccionado < (this.pasos.length - 1)
    }
  },

  methods: {
    onClickSeleccionarPaso (index) {
      this.removeClasses()

      let i = 0
      for (; i <= index; i++) {
        this.pasos[i].active = true
      }
      this.pasoSeleccionado = i - 1
    },

    removeClasses () {
      this.pasos.map(item => { item.active = false })
    },

    prevSection () {
      if ((this.pasoSeleccionado - 1) < 0) return

      this.onClickSeleccionarPaso(this.pasoSeleccionado - 1)
    },

    nextSection () {
      if ((this.pasoSeleccionado + 1) >= this.pasos.length) return

      this.onClickSeleccionarPaso(this.pasoSeleccionado + 1)
    }
  },
})