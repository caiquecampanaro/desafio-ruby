data_nascimento = "07/07/1987"

numeros_data = data_nascimento.delete('/').chars.map(&:to_i)

soma = 0
numeros_data.each_with_index do |num, i|
  next if num.zero? 
 
  print i < numeros_data.size - 1 ? "#{num}+" : num
  soma += num
end

puts " = #{soma}"
