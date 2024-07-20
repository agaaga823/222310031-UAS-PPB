const sampah = [
  {
    id: '1',
    category: 'Organik',
    data: [
      {
        id: '1-1',
        name: 'Dedauanan',
        kategori: 'Organik',
        description: 'Sampah Ini Berasal dari Pohon',
        image: require("../assets/daun-kering.jpeg"),
        penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
        olahans: ['1-1', '1-2'] 
      },
      {
        id: '1-2',
        name: 'Ranting',
        kategori: 'Organik',
        description: 'Sampah Ini Berasal dari Pohon',
        image: require("../assets/ranting.jpg"),
        penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
        olahans: ['1-3']
      },
      {
        id: '1-3',
        name: 'Ampas Kopi',
        kategori: 'Organik',
        description: 'Ini Sampah Kopi',
        image: require("../assets/ampas.jpg"),
        penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
        olahans: ['1-2']
      },
      {
        id: '1-4',
        name: 'Jerami',
        kategori: 'Organik',
        description: 'Ini Sampah Jerami',
        image: require("../assets/jerami.jpg"),
        penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
        olahans: []
      }
    ]
  },
  {
    id: '2',
      category: 'Anorganik',
      data: [
        {
          id: '2-1',
          name: 'Botol',
          kategori: 'Anorganik',
          description: 'Ini sampah Botol',
          image: require("../assets/botol.jpg"),
          penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
          olahans: ['2-1']
        },
        {
          id: '2-2',
          name: 'Kaca',
          kategori: 'Anorganik',
          description: 'Ini Sampah Kaca',
          image: require("../assets/kaca.png"),
          penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
          olahans: ['2-2']
        },
        {
          id: '2-3',
          name: 'Logam',
          kategori: 'Anorganik',
          description: 'Ini Sampah Logam',
          image: require("../assets/logam.jpg"),
          penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
          olahans: ['2-3']
        },
      ]
  },
  {
    id: '3',
      category: 'B3',
      data: [
        {
          id: '3-1',
          name: 'Baterai',
          kategori: 'B3',
          description: 'Ini Sampah Baterai',
          image: require("../assets/baterai.jpg"),
          penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
          olahans: ['3-1']
        },
        {
          id: '3-2',
          name: 'Sampah Elektronik',
          kategori: 'B3',
          description: 'Ini Sampah Elektronik',
          image: require("../assets/elek.jpg"),
          penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
          olahans: ['3-1']
        },
        {
          id: '3-3',
          name: 'Cat',
          kategori: 'B3',
          description: 'Ini Sampah Cat',
          image: require("../assets/cat.jpg"),
          penjelasan: 'Sampah ini berasal dari pepohonan, yang ...',
          olahans: ['3-1']
        }
      ]
  }
];

export { sampah };
