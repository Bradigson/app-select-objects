import Alert from 'sweetalert2';

const handleChecked = ()=>{
    Alert.fire({
        title : 'Success!',
        text : 'Materia Selecionada exitosamente',
        icon : 'success',
        timer :'1700',
        showConfirmButton: false
    })
}

const handleunChecked = ()=>{
    Alert.fire({
        title: 'Está seguro que quiere eliminar está materia?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Alert.fire(
            'Deleted!',
            'Materia eliminada exitosamente.',
            'success'
          )
        }
      })
}




export{
    handleChecked,
    handleunChecked
}