const isFill = props => {
  let string = {
    isFull : false,
    details: ''
  }

  if(!props.title){
    string.details += 'title, '
  }
  if(!props.answer){
    string.details += 'answer, '
  }
  if(!props.choices){
    string.details += 'Respuesta, '
  }
  if(!props.image){
    string.details += 'image, '
  }
  if(!props.category){
    string.details += 'tema, '
  }
  if(!props.killertest && !props.gemela && !props.newpregunta){
    string.details += 'tag tab, '
  }
  if(string.details === ''){
    string.isFull = true
  } else{
    string.isFull = false
  }

  return string
}

export default isFill