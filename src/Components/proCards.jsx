import React from 'react'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { UserOutlined, FileDoneOutlined, FileSearchOutlined} from '@ant-design/icons';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';


const proCards = () => {
  const data=[{
    heading:"Project_23",
  },
  {
    heading:"Project_23",
  },
  {
    heading:"Project_23",
  },
]
  return (
    <>
   <Container>
  <Row className='card_row'>
    <Col><Card key="" sx={{ maxWidth: 1000, color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius :'1em' }}>

                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    <Col ><Card key="" sx={{ maxWidth: 1000, color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em'  }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>

                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    <Col><Card key="" sx={{ maxWidth: 1000 , color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em' }}>

                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>
                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    <Col><Card key="" sx={{ maxWidth: 1000 , color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em' }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>

                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    
  </Row>
  <Row>
    <Col><Card key="" sx={{ maxWidth: 1000 , color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em'  }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>

                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    <Col><Card key="" sx={{ maxWidth: 1000 , color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em'  }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>

                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    <Col><Card key="" sx={{ maxWidth: 1000 , color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em'  }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>

                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
    <Col><Card key="" sx={{ maxWidth: 1000 , color:'#178ca4',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset", borderRadius:'1em'  }}>

                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  className='cards-head'
                >
                  <b>Project23_yasir</b>
                </Typography>
              <CardContent>
                <Typography
                  gutterBottom
                  component='div'
                  variant='body1'
                  className='cards-typography'
                >
                </Typography>
                
                <div className='sub'>
                  <Typography variant='inherit' >
                    <b>Templates</b>: General
                  </Typography>
                  <Typography variant='inherit' className='right'>
                    <b>Tag</b>: jpg, png, mp3
                  </Typography>
                </div>
                <div className='info'>
                    <div className="iconText">
                  <UserOutlined className='icon' />2 Users
                    </div>
                    <div className="iconText">
                  <FileDoneOutlined className='icon'/>9 Files
                    </div>
                    <div className="iconText">
                    <FileSearchOutlined className='icon'/>305 insights
                    </div>
                    
                </div>

                <Typography variant='inherit'  sx={{  color: '#178ca4',fontSize: '0.8em',textAlign:'center' }}>
                <b>File Types</b>: MP3, JPG, PNG, MP4, PDF, XML, CSV
                </Typography>
              </CardContent>
            </Card></Col>
  </Row>
</Container>
    </>
  )
}

export default proCards