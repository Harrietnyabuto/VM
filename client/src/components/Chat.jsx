
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@mui/icons-material/Send';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '95%',
    height: '88vh',
    backgroundColor:'#f5f5f5',
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
    
  }
});

const Chat = () => {
  const classes = useStyles();

  return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message"></Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="John Wick"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <List>
                    <ListItem button key="MaxSteve">
                        <ListItemIcon>
                            <Avatar alt="Max Steve" src="https://images.generated.photos/hsGr3Jf3eXffCEUgiHMV_S9p12htitx7QBq1utpzurs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODc0MTUyLmpwZw.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Max Steve">Max Steve</ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <ListItem button key="Alice">
                        <ListItemIcon>
                            <Avatar alt="Alice" src="https://www.delltechnologies.com/uploads/2021/07/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594455_003454-300x300.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Alice">Alice</ListItemText>
                    </ListItem>
                    <ListItem button key="CindyBaker">
                        <ListItemIcon>
                            <Avatar alt="Cindy Baker" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUZGRgaHBgaGhwcGBgcGhwdGBoaGRkcGRgcIS4lHCMrIRgcJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQhJCQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0MTQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xABEEAACAAMEBwYDBAkEAQUBAAABAgADEQQSITEFQVFhcYGRBiKhscHwEzLRQoKS4QcUI1JiorLC8SRTcnNDM4OTo7MV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAwACAwACAwEBAAAAAAAAAAECETEDEiFBUSIygWFx/9oADAMBAAIRAxEAPwD1KFDCOoyLFSFChQAKFDw0AChQoUACiKdNCip/M7hHbtQV2R5j2+7U3mazSmoKUmuDltlqRn/ERmcNRoDSBO2na95xaRJekvJ3X7Z/dU/uCmf2jjlGKqMtXvPb5Rw8yu5RlviRAAKnD3hX6QwJUXlyxPvkI5LjYD5daU6RF8Qtw3+v0hF6fU+gp5AwwJgXOXgGA6jOI2BGbKPvvXzMDTJgOZqeXmanwhhhkG5ZdRDwLwnLHaD1I/LnCWZuHpyORiNZldZ5wbZrIWFSBTljyhAlkZLPexoeQ9IGmBdRr59KRdPPVFIGHpuOw78opbS95q+vkdfWBMKWCEAg12ZEe8ICnB71atntNOcWSiuIz1jUeH0jiajZipHlD0I3fYDtTKs6sk4sl4g3wLwr8veC1YAYUwOvKPVrNaUdFdHV0YVVlIZSNoIwMfN8td+Gvcfp9Yu+z3aWfY3qhvyyashNFY7RncbeM9dYloZ71DiK/QmlpdplLNltVW1HNSM1YaiPeBEWEIB4aFCMAHIjqORHUAChQoUACh4aHgAUNCgTSlsWTKd3NAqkk6wAMab9Q3kQAZft/wBpP1eX8NG/aTKhT+4Mnfj9ld9TqjxxnvcB474M03pJ7RNaYxxY5DJFXBUG4D3jAWumoZmGkBJLX7Ry1flDlrx3Dn/kxFfLtQZDM7BD2ieFFBgNQ+u+GB07nPIDL3tiKq41BPGo9cYjF5scq7vSD7Hot3OI98AIG0tgk3oBD7AOQp4xIkkt9mNPYdADGvLKkWlk0KE3U3fTCIfJJouGvkzdj0cFIL1OuCrXagFuoKbiARTj+QgnSNicmoHQHwign3lOPjUQ08g11I3JrjgeOGGd0+kcldRidHB+b3TLGGdBy8otGTOFl1HT8jCr1yI8j69YcVB8t/vPrHLkZjjxH19QIYELnGq5+BEJTTVUHV6e8oct+WrcOtOsMCMtR8D6QmCNF2M7QGxzwWY/AmECZX7NMA/FScdo5R7kjV184+azsOvXv1H3+cew/oz018azfCc1eRRDXMoa/DJ4UZPub4ljNsIRhgYcwgGh4aFAA8KFCgAUKFCgAaPMP0pacqRZ0bAUaYN+BRT1vH7hGRj0XSVsWTLeY/yopJ37BxJoBvIj550rbXnTXdz3mYk7idQGrHCm6D5GC16n3X36Rw7fZXHVxOswi+e/y2CJEW4pY5nwGzifWKEO8wItBj/cdvCOLNJLGpzjiUhc16btUa3Q+iwcaRNV1RpEdmC2DRZMaiwaGr/iLGwWAKMotpKUjmdts6lClAcnRoETPYhxplr6Qeqx2EiSiom2HAxnNL6GrVh9I3TpFdarNWKy5Jcqjyq1WZkORK9DELPrHv6e8jGz0rY61wxEYy2We4SVrvGzjG0Xk5r4+vqI3aopXD2fziFXofdK08iMY4DatRy3HWPe3dDOK88OBzB6+camJ043YH1+vnzjkHMV5+TehhS3vLTWMx5iOGPUeIOY5+YgAlvEjeM/WNR2A0kZNtl1Pcmj4bbKt8h/GF5MYy16hrnlXgflPpEtmmFTVTRkNUOw5jowXpAwR9JrDmB7DaA6I4ydFccGAYecERIxhDw0PAAoeGhQAPDQoZjQQAef/pV0tclLIBxfvtwUgKDtxqfuiPIzgN5x5RoO2Olf1m0u4PcrRf8AioovUVPOM/LW+xJy18Pzy5nZDkbJbNLricv8+nhxiG0vea7sOPv3jBc+ZdXf7p9fwQJZkrD/ANFj4LfQ1lvH3uj0HRNlAEZjQdnoBGxseAjk5Kyzv45xJZIkSKIhVo7DxnkvAVLESAQMjx38SLTIaJXgWdEhesQuYTY0ittlnDRlNK6OzP8Aj8o2cyK61SqwlWGVUpo8sttnKErSmscsve+Ig9RXUffh6RstM6MDoaZjLaNx3RixUMVOHvHxoeZjsiuyODkjqyNmutXbnxGv1juaftc+WvofIRzNFRv9R78YjR6rvHv3wjQzCBs1fX6HHgY7szmu/LmDWIZbatn9JzHSo+6Iml4MDtoeYw8fWEwR7z2Gn37DIOxSv4HZB4LGgjJfozetgQbHmD+cn1jXCIGciHhoeABQoUKABRme3mlvgWV6GjzP2a8D855LWNMY8a/STpb4s66DVEvIv3WpMau9xc/9ttogY0Ymc9eZqffvKCLPLoAKYn5tuwAbxWnFjA8hLz7aU4bgd2vgN8FWp7qbzlw+UE78+bbooQDbZt5qA4DZlxHvKkG6Kk1MVOsb8/CNPoOTlE28I04lmjT6Ol0pGgkRWWKVhFrLEcb2d60ELHYjhYkEAHQh6wlEdhYCTmsM0d3I5ZYGgyDvAs1IOdIGmLEtFIo7fK1/4O6MHpuRcmXtVceeBj0a1rgYyHaGRVanMYH0jbhrDMeecoy03P03j/HjA64NxB/KCpo7oJzGB4jA+XjAr5j3r/MdI60cLO0NGHT6e98GSwO6D7BwI8RFexwrur0/MQbKfFSOPvxgYI9t/RlLIsCE5s8xv5yPSNdFL2PlBLFZwBTuKebC8fEmLkRCGxCFChQAKHhoVYAANN2spKYoQHaiIc6M32qVxCgM5GxDHz/p+1B5rlAbgNxAxqQFF1Qd+06zUx63260mEIW9QLKmMcql3IRFUZklRMGGomuqvirG6anMZDfDQBUoBBQne28nV6ceEDWyaWxObY8h3VEJmN33icve8xDOz4YdKD0ikJshRu9XhGk0RpUIRVcIqNHyVJxEXpsKUwNDEU1pmsKto22jbdLdQVIixV48yl30NVOWsRptEaWY4NHPcY9R1RyN+M1SvEivFek4HKJfiRjk2DhPUa4Z9JIuLMBFBpG0EAkahGetV9zmT/jONJnJlVY0bltP2f8AfHjETdprOK0YGMA1jc4YAQRI0SDQuw5Rr1lfJj2t6Rr27WST9k8YIlaRSZ8hDbRkRyMZ+Toyz6w3X6RK+h0pVHK7AaEeIia6M0lWv9LSatYp9KWS8p2wdZndaK9DTJh5HZE8xKxlpmm16eXz5BDOu3Eccj/bFc3ynl9PWNX2psdx1cDWTyobw6E9YzNpSjEc+N7EEbR9I7YrKycFzh4IQ2HD374QTZh8o4jqcPOBDl5+nhBaH5Tw6jA+kUyEfRXZgg2Sz0/2pf8AQItIp+yRrYrN/wBSf0iLkxCKexoaEIUAhRy5jqKbtNpAypRuAl3ISWowJZzQAHVnnqzyBgYHl3b7SRefMZflDCWrbkUFwmzEip3KNWOGHebd5Ae+pi57Sm7MKXrwl1FcaMxNXehyq1cNgUaopSaLTWc/py9YqV4JkgerDYMfw5eNPGInMdAUHHA8svE1jh/mp795xQBVna6tYOsPxJhARS+rFrqiHl2EMmMXPZi0rJJDqbm0DLMesZ5TNcUtFTJtQa9SU5uEB3l3mVbxurUEUxbAba4RPItQBDK1RqIFK7iNRiK06Jmo5Eh2KVUqUcqaKbyXl/eBoQdoqIsLLoa5Kd3VzMY3gBQg4gkOSczUmoqRhCpS0OXSfpe6Ltl4Yc4uaGkUeirHddbtaNqOe3GNell7lY5KXvh2zXnpnrSc4qZs3pGjn2EsTSKvS9h+GFAoSQTVqhcKZkA7ctcVKIp/RSzb2Za4NWFWbcqxWtpVFJHxX6Lv3R6D2fslnKly6vNIILGlRUUoBq2R5vbLPaZDrLKgfDe8n7JCSymoYPdq4rjQkjdHTMy0ctVSfhZSdLg0uzQa/vC7XZQj6RaWbSJrRhQ8RQjaCMCIDsWh0Mia89R8WYxZFAusCaksQMEBJ+WmQygzRfZxgoq7U1qcszkNWqIuZNOOqbLizTL0WITCGsejgggl0pHMzpRle1kn9mGpkR+cZKz2RZktqnvSGUE7ZU1qKfuuekzdG67RpWSw4eYjD6LNJ6qTRZ1+Q+4OKIeTXWB3R0cT8Zy8y/JFJOlFSynP1GP1iazD5a6moedIN03Ko6NdoWXvDYykgjqGHKBLEBeSuVangGr5VjfOVk52sPB9BdjR/obN/wBSeUXZiv0FIuWaSn7stB0QViwMSgZxDw0PAAjGF0tavjWl2HyWcXAdrsCZpDUwIRXQHOr4UvVjW6atokyHmH7Kkjjko5kgR51pN2s1je8O+yqGJpUzJ/7RxTaqBBXfTXCYHnWlrRfmM20k8YAQV4ecdTO80ShK4D3T3TlGoHG/37/KIbNi67z9Y7tD6hHFh/8AUTj9YXwxL9kbnRVmBWDX0SwqUPKmH5QtCJgI1MmUKRxunk9FQsGSGj3rWi15wbIsjLmfp0jQOggKewBhd2HRHWj5XfG6p9I0rrRBFLoyVjWL20HuiJXuRvzBXouMPabKWGBhBtsESnBglg0YzSOjHBrcvDaMxy+hgJJb1oS+vDv+hj0ZpAbVERsA2Rp2aI6pmUsFmfUh6U88dZi/stlIGMWCWWkSiXQRm8vZSwgN0AECTmgm0vFbPeEy0is0saowjzu1IymoGCuhOGRFaY6s432km7hiC1aFU2Kfh37hfLG8lHH9NI146x/THkjt/DO9q5IuSpo/8lG3VdWdqfeZ+sV/Z6w/EnIn7xCfja75MekGaatAazWZK1uE9Cl4eDgcou/0Z2G/alc5IL/4Q6D+cjwjoXknLX7ZPZVEIw4hoCDmHhhDNABnO07B3lSCKqS0yYBj3JYrQjWGxXiRHnv6RLYzP8L/AGgXmGtR8SbRqcu6o3AxvmtSh7RamaiJ3AdV2V3nIO+ZdU/9Zjz3TyMqd+qvMf4s5iMnNXSWNpW8mAwBrUjCotgY0pdrXVhxNP8AJ5wmF1anM+z0y5nZExFWqRQDIZkcz57oDtEy8fAbIvYtEDHXHNnmUdW2MD44wz5RGYok9P0RMApGhS1UGcYDRFtJVW2jxGB8YvF0iCM48+5aZ6kWnKLi2aQoNUCaODTGvk90Gg3mKW02ouaCLWxWkSkAOo1rzrjB1wh9ss2uj7NSC5wwir0dpMXARjWC30ktMYE1gGnkEdCTSK+fNeW42GLRLShNaxWaUnKxVVzrXkIkos7FpMERaJaVIjETpbJ3lz2bYJselK6+O2Gm0LCZrmniIps8RUJbKx20+DsCk6nvFZaHgidOgB2rE5GwS2iqkQDK7byAlLrO5F25SgFcDeY4U4ViXTdo+HKd9inqcB4mPPLFJvMqjMkZ7Tljzjo4oTWWcvNyOX1XyWBQkoDiboYjbeFaAaqoF6iPXP0a6NuSmmHNyEBwxCE3mG5mOX8MeZWKUZk4lcasFWmsiiJTkqn7pj3jRdkEqUksfYUDnrPM1MbHMwuGMPDQCIwYr9N20ypTMuLmiSwci7kKld1TU7gYPLUFYxGldLiY7Ts5MksFONC3yO+9qkooJAxYgkkAIZF2gtsmzyJMpmJlqVd/35nwzfUZ5tMusa4fNUimPnWlNIPaHLuAK1CipwA1CtN5LEVYnlFpbJUy0P8AFc998UXA3EzVqYAFvsjDInMxUWt0St2hOQpiANxoK8aY6qCBMeCutbBRTXr9B73bIAph4/TyMST3JPvrHLbOHXVGiIbyyFxl73+scXaxM4rCVPfWKEH6EtFKodtR6xoLlRXdGLEwqwYajGv0VawwG/L1HKMOWcPsdHDWV1Z3YcLutjGgaQWSgx4RV2jR6upGWsceMAaOnTFcS2Y44ITheOpSRr2HX4xl17aOhPG9FvJmTJdVGWoGvhHL2ya2sjhn1guZ8eWxUqailQaEY5Y5GsP+s4VeQBvIYQisfTB7NZnY1vv+NvrF5YbBdx1784BlaTA/8XSv0gj/APsOMrO3j9IlplaDp8vCKK2SSDeU0PvOO9IaampQNKCk5Atj0pFNZ9Iz7S5VUAUEi/U0w4jGKmXsirlefJcWHSVe6cCM4tVtOEUFmsJDnXgPWLMC6aRnSWfDSW8ehDOSYlC0EQ2c646tM8BSYkMmQ7bWzBZQ+0bzcFy8f6YpbDLugvsBI/5HBaczXlC0jOM2e7VwBujgufjUwVIl1H8KkV5YnjlTlHZK6ykcFPtTZtP0e6Lvz0Zh3ZS3zsvkkIM9VWYbjuj1dYzvYnRxlWZSwo8z9o26vyryWnjGjENEUKGh4aGIyXavShr+rSmN91rMZcTKlk0Lf82rdQaya5AxkJg/WLqqgWyy/kWpImMoIGIzRcqjBjXHEkUCaaqri6WLsXnsSWeaxrdVjkiKDSlTUVFMYD0hpqbO7paiZXR8tBhQgUUjDCtaQnls0SSLLTemlp8OUxNcZj63PLJBTIYGgGQBOWmuST1J9TEjvs8613k64GmnV13nUDFSiaZyudef0hjgPfv/ADEiJt5xyx1nV4kxZAyp5efvwhpmEdqfziKa1TABA6wfoe1XWuk4E1G4/nAJMR5YwNZWBTXV5PSbBNvLENssIZqZVxB37jqO+Kvs9brwxzyPH3jGgnjCozEcdJzR6PHSpZNTo/SssownYNdAJCsQ1K1pdB40jSzpCOlygK4UyIwyoY8/0fpFCt1xUajrEHL8I07ykb1Hr7whp4LrgTeZeDY6UkSRL76qEWhNFNRQ1+yK9IpLfa5YMv4SBxU4pSiimo66nygZPhgAs/IVJG33WBrTpBRgg5mlYGxTw428gGl7F8abfdiFoFVMMhmeNSceESpICLRRQbI7kJjeOJOMdzRGdV8FdZWgSUuJMRzTjE74CA3eJAmD0ii7Q6UuqVU9415UzMS6S0iEU4xlXmF7zttCgcTeI/lzjbjjLyzDm5MLqtjWOSaqiip9TkPeyNNZLKvxpVnGIDK0w7ddDyBrxgDQCql6c28LwpVm8/CDeybl55Zs2DV2irY+9wjWn4znlaPa7A4aWjLkRhwgqKvs05azSiRQlAeuI8DFoIa0RW2KFChGGI+cJxv4kk7BgFG5VA8jELy645DDPE8hlXdFxI7OzSK3GocAX7lccAFqW8I7ndnpmJLItNQLOw2g4U15k57MBEql9mrTM1MIGWHPHmYaXIOZjQWbs+xJL1w1n7I1seO/KI7fZQmogGgGBrtpQ68juqNeEV2RPUo2yiA4ncImfHAZfSIXagi0ZsTN0iFnjhnMcmKSFkTGHbKHSWThBEqSMKiuzVBkWDvRU8o4bVk3Dbyj0WyEOopHnM4ml0eUaXsrpC6iq5wqQDwyjDmnK7HRwVh9S9n2FhivOI1dxqMaSzspFYJ/VEOccqpnesrRl0dztg+y2dtnOLpLCgyicSQIG8g23sClSaCIptIMnOBFJb7YBhWJAjtM2KS36QCigziO2W4tgvX3nFVaPGNYn7Mbv6K63zmY4mJ7XIuBEBxIDEb3pQdAD96IJcou6prZgvUwd8X4loZ8xUkf8Rgg8hHUvDifrCbcwSXdGwL418bh6wR2cqHABoWurXZeYA+AMVmlH7wUGt2o6GleobrBeiyRWmaqGHFWvCJpfiXL9PedEEGTLoKC6ABuGA8BBsAaDcNZ5TA1qinqKwfBOkRW2KEYUMYYjyi1aelA/s5Lsa0vubiDVniT0xh7FapswnuKFFMgRQnAC8RUncMRhlWLeR2YRO6TeUHBVBXD+NySx+6F3RcLY1QAKAtMgvdArsA468znnHO2kdOGzN2pbgo5FQLxUZk51OzLAYE4Za8PpO0OXmM63SigKmd2+Rd56+pOJMeqWiwIiO5WtEdiT8xopJx2mniBhjHmVnlXwXfN5l47O4pNPxOPwxpH2Z19FNabJcRdpz5f58IrmlljGt0rYr1wVpeNPuopZzyRSecUCWdiKig4mlI0T8Icggs6jMxw90ZCLKVoxnOLqBtr9YmeXIlDDvv18cofZC6v/hW2eQzasKgY5VJoI6dwWZl+WtF/4jAeFIIkuzszHJEd9wuobv8AOUHOIJSaobYkiFlqQYN0OKpTY0QvKxoILsCXaCJp/iaROKNFozSby8G7y+I+saay6RVxVTGTlJUR0JZU1BIO6OSkmdc00bdLVDTLYBGOFumD7XUCI3tcxs28AIXVmnZFvpPTAHdXExQzHZ8zHSyyYIWVDWEZvLBPh0EAWlYtZ0Vs6NIZnQLYVKu7/wC2jNXYzdxP5nHQxzo9KLe2sOiVY+dOUST+5JO2a977kq8o6uz/APxxIi3UUVyXHi3fbwjc53sCtGL8h4kt/dFlolu+ddQw9PSKlPmJ2CvhT6RYaKekxd97rQj1EFaCdnuHYybescnHJSv4GK+kXkZj9Hzf6NBsZx419Y08KdE1+zFDGFChiKdBsz2/T39I4tDhKYYkm6MySAST08xlhQtxcGAqTFdZlZmdyca3FwwwNGpurlzjlOrILpEsJFoLUB+DMJAxC/s2oK6yNvpSMFoay1RNrGv42IHkBG40q3+ntRxP7Cb/APmzHLp/mMvoSQKSx+6lcsqg/wBzHpvjWdGdbBtLyiFcgAgSKb62mYiH+S9Alg7LsygsSDSuG/GNI1lEz4rUwaaiU2CTLYEf/YDGhstnFMoTprwqZTWTzu1dlnGT0XeCx5AZ+8Ypn0QL11UdzljgOg+seyPKirtsmhrE96RSmWee2rQxkWaczUDFEWgpQX50sUrwUxn7KmPIxuu2TBbI/wDFMlL0LP8A2Ri7CteNDGs03OTNylWCcWauMTpJiylWbuiGMqMnWTZTgVmFINCQPKSDZcZtmiQO9nhls0WQWGuQslYA1kQzpB9yIpiQZFgqLQsVrymchF+ZjQbtpO4Cp5ReTpdYqra1xSK0ZwVr+7LHzsOPyj72yNY2ZX4sgEwrMmqFqUGC7RLligPFqE8WMc2+Ya5UqWr4V6YjlD2LBfiEfNUgfwIQFHNrv4d8BtMJJqa3QBzJJP8AMxjpRyvR3KlYE7VbzB/tMd2Z6AMPsuPKvpB1mkmqimGPQd0/1QLYpRvzJRzAvfhP0bwhN+MaXqPauwKUsi73mU4ByB5RpYznYBh+oSjtMzwmuPSNFWFOia2xQ0KsKGI//9k=" />
                        </ListItemIcon>
                        <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                    </ListItem>
                    <ListItem button key="RemyNick">
                        <ListItemIcon>
                            <Avatar alt="Hui Nyaga" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2z92sfuQKFUH4oQuse7qJGABAIq5u58BytntK4mZ3AVpdROfe1myaZj9P9qPYYCBh1c&usqp=CAU" />
                        </ListItemIcon>
                        <ListItemText primary="Hui Nyaga">Hui Nyaga</ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <ListItem button key="Nancy Were">
                        <ListItemIcon>
                            <Avatar alt="Nancy Were" src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2022/02/real1.png" />
                        </ListItemIcon>
                        <ListItemText primary="Nancy Were">Nancy Were</ListItemText>
                        <ListItemText secondary="" align="right"></ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Hey Stacy, What's up ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, I am Good! What about you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="I am good, Will you be attending the Redcross event at Nakuru?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '20px', marginTop:'-0.5rem'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;

