const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    const testBand = await Band.create({
      name: "ACDC",
      genre: "Rock",
      showCount: 150,
    });
    expect(testBand.name).toBe("ACDC");
    expect(testBand.genre).toBe("Rock");
    expect(testBand.showCount).toBe(150);
  });

  test("can create a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Angus Young",
      instrument: "Guitar",
    });
    expect(testMusician.name).toBe("Angus Young");
    expect(testMusician.instrument).toBe("Guitar");
  });

  test("can create a song", async () => {
    const testSong = await Song.create({
      title: "Highway to Hell",
      year: 1979,
      length: 207,
    });
    expect(testSong.title).toBe("Highway to Hell");
    expect(testSong.year).toBe(1979);
    expect(testSong.length).toBe(207);
  });

  test("can update a Band", async () => {
    const testBand = await Band.create({ name: "ACDC", genre: "Rock" });
    await testBand.update({ name: "The Police" });
    expect(testBand.name).toBe("The Police");
  });

  test("can update a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Brian Johnson",
      genre: "Rock",
    });
    await testMusician.update({ name: "Andy Summers" });
    expect(testMusician.name).toBe("Andy Summers");
  });

  test("can update a Song", async () => {
    const testSong = await Song.create({
      title: "Highway to Hell",
      year: 1979,
      length: 207,
    });
    await testSong.update({
      title: "Every breath you take",
      year: 1983,
      length: 228,
    });
    expect(testSong.title).toBe("Every breath you take");
    expect(testSong.year).toBe(1983);
    expect(testSong.length).toBe(228);
  });

  test("can delete a Band", async () => {
    const testBand = await Band.create({
      name: "Guns 'n' Roses",
      genre: "Rock",
    });
    let destroyedBand = await testBand.destroy();
    expect(destroyedBand).toEqual(
      expect.objectContaining({ name: "Guns 'n' Roses", genre: "Rock" })
    );
  });

  test("can delete a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Slash",
      instrument: "Guitar",
    });
    let destroyedMusician = await testMusician.destroy();
    expect(destroyedMusician).toEqual(
      expect.objectContaining({ name: "Slash", instrument: "Guitar" })
    );
  });

  test("can delete a Song", async () => {
    const testSong = await Song.create({
      title: "Sweet Child of Mine",
      year: 1987,
      length: 302,
    });
    let destroyedSong = await testSong.destroy();
    expect(destroyedSong).toEqual(
      expect.objectContaining({
        title: "Sweet Child of Mine",
        year: 1987,
        length: 302,
      })
    );
  });
});
