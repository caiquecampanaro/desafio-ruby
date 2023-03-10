destinations = {
  61 => 'Brasília', 
  71 => 'Salvador', 
  11 => 'São Paulo', 
  21 => 'Rio de Janeiro', 
  32 => 'Juiz de Fora', 
  19 => 'Campinas'
}

puts 'Digite o DDD:'
ddd = gets.chomp.to_i

if destinations.key?(ddd)
  puts "#{destinations[ddd]}"
else
  puts 'DDD não cadastrado.'
end

  