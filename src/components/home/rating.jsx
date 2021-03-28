import React, { useState } from 'react'
import { Button, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Rating from '@material-ui/lab/Rating'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { getTranslate } from '../../localization'

const useStyles = makeStyles((theme) => ({
  rootWant: {
    width: '100%',
    margin: '20px 0 20px 0',
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 0 10px #ccc'
  },
  header: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerText: {
    display: 'flex',
    alignItems: 'center'
  },
  profileImage: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  coverImage: {
    width: 90,
    height: 130,
    boxShadow: '0 0 5px',
    margin: theme.spacing(2)
  },
  person: {
    fontSize: 15,
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  event: {
    fontSize: 14,
    margin: '0 2px 0 0',
    display: 'flex',
    alignItems: 'center'
  },
  moreText: {
    color: '#000',
    '&:hover': {
      color: '#fff'
    }
  },
  body: {
    flex: 3,
    display: 'flex',
    padding: 5
  },
  genrePart: {
    display: 'flex'
  },
  detail: {
    marginLeft: 10,
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  date: {
    color: theme.palette.text.hint,
    fontSize: 13,
    fontWeight: 'bold'
  },
  moreDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    padding: 5
  },
  bookTitle: {
    display: 'flex',
    justifyContent: 'start',
    fontSize: 15,
    color: theme.palette.secondary.main
  },
  authorTitle: {
    margin: 0,
    display: 'flex',
    justifyContent: 'start',
    fontSize: 12
  },
  footer: {
    flex: 1,
    borderTop: '1px dashed #fff',
    borderTopColor: theme.palette.primary.main,
    display: 'flex',
    padding: 3,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inactiveLikeBtn: {
    color: theme.palette.primary.main
  },
  activeLikeBtn: {
    color: theme.palette.primary.main
  },
  commentBtn: {
    color: theme.palette.primary.main
  },
  captionText: {
    fontSize: 13
  },
  rateBox: {
    margin: 0,
    padding: 0
  },
  removedshelfBtn: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: '50%',
    marginLeft: 5,
    '&:hover': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      marginLeft: 5
    }
  },
  addedshelfBtn: {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    width: '50%',
    marginLeft: 5,
    '&:hover': {
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      marginLeft: 5
    }
  },
  moreinfo: {
    display: 'flex',
    justifyContent: 'center'
  },
  slash: {
    padding: 5
  },
  moreinfotxt: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.hint,
    fontSize: 13,
    fontWeight: 'bold'
  }
}))

export default function Want({ item }) {
  const [like, setLike] = useState(false)
  const [inShelf, setInShelf] = useState(false)
  const translate = getTranslate()
  const classes = useStyles()
  return (
    <Grid className={classes.rootWant}>
      <Grid className={classes.header}>
        <Grid className={classes.headerText}>
          <img
            className={classes.profileImage}
            src={item.userCover}
            alt="cover"
          />
          <Typography variant="h3" className={classes.person}>
            {item.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.event}>
            {item.event}
          </Typography>

          <Rating precision={0.5} readOnly defaultValue={item.rate} max={5} />
        </Grid>
        <Typography className={classes.date}>{item.date}</Typography>
      </Grid>
      <Grid className={classes.body}>
        <img className={classes.coverImage} src={item.bookCover} alt="cover" />
        <Grid className={classes.detail}>
          <Typography variant="h4" className={classes.bookTitle}>
            {item.bookTitle}
          </Typography>
          <Typography variant="subtitle1" className={classes.authorTitle}>
            {item.bookAuthor}
          </Typography>
          <Button
            size="small"
            className={
              inShelf ? classes.addedshelfBtn : classes.removedshelfBtn
            }
            onClick={() => setInShelf(!inShelf)}
            variant="outlined"
          >
            <Typography variant="subtitle2">
              {!inShelf ? translate.addtoshelf : translate.addedtoshelf}
            </Typography>
          </Button>
        </Grid>
        <Hidden smDown>
          <Grid className={classes.moreDetail}>
            <Typography variant="subtitle2">{item.score}</Typography>
            <Box
              component="fieldset"
              mb={3}
              borderColor="transparent"
              className={classes.rateBox}
            >
              <Rating precision={0.5} defaultValue={item.rate} max={5} />
            </Box>
            <Grid className={classes.moreinfo}>
              <Typography className={classes.moreinfotxt}>
                {item.genre}
              </Typography>
              <Typography className={classes.slash}>/</Typography>
              <Typography className={classes.moreinfotxt}>
                {item.lang}
              </Typography>
              <Typography className={classes.slash}>/</Typography>
              <Typography className={classes.moreinfotxt}>
                {item.year}
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid className={classes.footer}>
        {like ? (
          <FavoriteIcon
            className={classes.inactiveLikeBtn}
            onClick={() => setLike(!like)}
          />
        ) : (
          <FavoriteBorderIcon
            className={classes.activeLikeBtn}
            onClick={() => setLike(!like)}
          />
        )}
        <Grid style={{ display: 'flex' }}>
          <Typography className={classes.captionText} variant="body1">
            150
          </Typography>
          <Typography className={classes.captionText} variant="body1">
            نفر این کتاب را در لیست مطالعه دارند
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
