require 'pp'
# Uses ruby 2.6 endless range
string = ''
for i in 0 ... ARGV.length
    string += ARGV[i][1..]
    string += "#{ARGV[i][0]}ay"
    if i < ARGV.length - 1
      string += ' '
    end
end

pp(string)