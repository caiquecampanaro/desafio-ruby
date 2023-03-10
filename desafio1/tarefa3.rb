def imprime_metade(string)
  tamanho = string.length
  metade = tamanho / 2
  return string.slice(0, metade)
end


puts imprime_metade("Brasil") 
