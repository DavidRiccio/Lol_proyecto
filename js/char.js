class Champion {
  constructor(data) {
      this.id = data.id;
      this.name = data.name;
      this.blurb = data.blurb;
      this.image = `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${this.id}`;
      this.tags = data.tags;
      this.info = data.info;  // Información adicional del campeón
      this.title = data.title
    }
  }
export default Champion;
