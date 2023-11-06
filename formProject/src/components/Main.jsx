import {useFormik} from 'formik';

export default function Main() {
  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues:{
      email: '',
      age:'',
      password:'',
      confirmPassword:''
    },
  })

  return (
    <>
      <form>
        <div className='inputDiv'>
          <label>Email</label>
          <input type="email" 
          value={values.email} 
          id="email" 
          placeholder="Mail adresinizi giriniz..." 
          onChange={handleChange}
          />
        </div>
        <div className='inputDiv'>
          <label>Yaş</label>
          <input type="number" 
          value={values.age} 
          id="age" 
          placeholder="Yaşınızı giriniz..." 
          onChange={handleChange}
          />
        </div>
        <div className='inputDiv'>
          <label>Şifre</label>
          <input type="password" 
          value={values.password} 
          id="password" 
          placeholder="Şifre giriniz..." 
          onChange={handleChange}
          />
        </div>
        <div className='inputDiv'>
          <label>Şifre Tekrar</label>
          <input type="password" 
          value={values.confirmPassword} 
          id="confirmPassword" 
          placeholder="Şifrenizi tekrar giriniz..." 
          onChange={handleChange}
          />
        </div>
        <button type='submit'>Kaydet</button>
      </form>
    </>
  )
}
