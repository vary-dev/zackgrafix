

const variants={
    primary:"bg-cta text-white hover:bg-cta-hover",
    outline:"border-2 border-ink text-ink hover:bg-ink hover:text-white",
    dark:"bg-ink tetx-ink hover:bg-soft",
}

const sizes ={
    md:"px-7 py-3.3",
    sm:"px-5 py-3 text-[15px]"

}

const Button = ({href,variant='primary', size ='md', className ='', children, ...props}) => {

    const classes =`inline-flex items-center justify-center rounded-full fonr-semi-bold transition-colors ${sizes[size]} ${variants[variant]} ${className} `;
 
 if (href)
 {
    return <a href={href} className={classes} {...props}> {children}</a>
 }
    return (
 <button className={className} {...props}> {children}</button>
    )
  
  
}

export default Button

