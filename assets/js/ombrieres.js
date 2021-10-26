// fadding left/right/top/opacité
const ratio = .2
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .2
  }
  
const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        } else {
    console.log('invisible')
}
})
}

  const observer = new IntersectionObserver(handleIntersect, options)
  document.querySelectorAll('[class*="reveal1"]').forEach(function(r){
      observer.observe(r)
  document.querySelectorAll('[class*="reveal2"]').forEach(function(r){
      observer.observe(r)
  document.querySelectorAll('[class*="reveal3"]').forEach(function(r){
      observer.observe(r)
  document.querySelectorAll('[class*="reveal4"]').forEach(function(r){
      observer.observe(r)
  })})})})