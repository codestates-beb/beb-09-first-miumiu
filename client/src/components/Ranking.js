import React, { useState } from 'react';
import { 
  Button, 
  Grid, 
  Box, 
  Tabs, 
  Tab, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
} from "@mui/material";
import '../assets/css/Ranking.css'
import image1 from "../assets/images/dummy1.jpeg";
import image2 from "../assets/images/dummy2.png";
import image3 from "../assets/images/dummy3.jpeg";

export default function Ranking () {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryClick = (category) => {
    // 카테고리 버튼 클릭 시 처리할 로직 작성
    console.log(`Clicked category: ${category}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
  };

  const trendingNFTs = [
    {
      id: 1,
      name: 'NFT 1',
      image: image1,
      FloorPrice: '13 ETH',
      Volume: 'This is NFT 1'
    },
    {
      id: 2,
      name: 'NFT 2',
      image: image2,
      FloorPrice: 'This is NFT 2',
      Volume: 'This is NFT 2'
    },
    {
      id: 3,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    {
      id: 4,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    {
      id: 5,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    {
      id: 6,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    {
      id: 7,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    {
      id: 8,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    {
      id: 9,
      name: 'NFT 3',
      image: image3,
      FloorPrice: 'This is NFT 3',
      Volume: 'This is NFT 3',
    },
    // 추가 NFT 데이터
  ];

  const data = [
    {title: 'NFT 1', floor: 'This is Card 1', totalVolume: '6'},
    {title: 'NFT 2', floor: 'This is Card 2', totalVolume: '1.5'},
    {title: 'NFT 3', floor: 'This is Card 3', totalVolume: '7'},
    {title: 'NFT 4', floor: 'This is Card 4', totalVolume: '2'},
    //... More cards
  ]


  return (
    <>
      <Box sx={{ width: '100%', margin: '20px 0px' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example" sx={{ marginBottom: '20px' }}>
            <Tab label="Trending" />
            <Tab label="Top" />
          </Tabs>
        </Box>
        {value === 0 &&
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', width: '100%', display: 'flex'}}>
                <Table aria-label="simple table">
                  <TableHead >
                    <TableRow>
                      <TableCell sx={{ maxWidth: '5px', fontWeight: 'bold' }}>Rank</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Collection</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Floor Price</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ height: '150px' }}>
                    {trendingNFTs.slice(0, 5).map((nft, index) => (
                      <TableRow key={index + 1}>
                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                        <TableCell>
                          <div className='collect'>
                            <img src={nft.image} alt={nft.name} className='tableImg'/>
                            <span>{nft.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{nft.FloorPrice}</TableCell>
                        <TableCell>{nft.Volume}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={6}>
              <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', width: '100%', display: 'flex'}}>
                <Table sx={{ border:'none' }} aria-label="simple table">
                  <TableHead >
                    <TableRow>
                      <TableCell sx={{ maxWidth: '5px', fontWeight: 'bold' }}>Rank</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Collection</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Floor Price</TableCell>
                      <TableCell sx={{ fontWeight: 'bold' }}>Volume</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {trendingNFTs.slice(5, 10).map((nft, index) => (
                      <TableRow key={index + 6}>
                        <TableCell component="th" scope="row">{index + 6}</TableCell>
                        <TableCell>
                          <div className='collect'>
                            <img src={nft.image} alt={nft.name} className='tableImg'/>
                            <span>{nft.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>{nft.FloorPrice}</TableCell>
                        <TableCell>{nft.Volume}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        }
        {value === 1 && <Box p={3}>Top</Box>}
      </Box>
    </>
  )
}