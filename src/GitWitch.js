const QuestionParser = require('./QuestionParser');
const CommandRunner = require('./CommandRunner');
const ResponseFormatter = require('./ResponseFormatter')


class GitWitch{
  constructor(){

  }

  process(input){
    // process (process.env), concatenate them into a string, and then pass them along to gitWitch.process().
    const qParser = new QuestionParser()
    let parsetoObject = qParser(input)
    const cRunner = new CommandRunner()
    let conversion = cRunner.run(parsetoObject)
    const rFormatter = new ResponseFormatter()
    let response = rFormatter.format(conversion)
    return response

  }
  parser(){

  }
  runner(){

  }
  formatter(){

  }
  command(){

  }
  response(){

  }
  output(){

  }
}

// test cases below
// describe("GitWitch", () => {
//   beforeEach(() => {
//     this.parser = { parse() {} };
//     this.runner = { run() {} };
//     this.formatter = { format() {} };
//
//     this.command = "command";
//     this.response = "response";
//     this.output = "output";
//
//     spyOn(this.parser, "parse").andReturn(this.command);
//     spyOn(this.runner, "run").andReturn(Promise.resolve(this.response));
//     spyOn(this.formatter, "format").andReturn(this.output);
//
//     this.witch = new GitWitch({
//       parser: this.parser,
//       runner: this.runner,
//       formatter: this.formatter
//     });
//   });
//
//   it("processes a question and returns a formatted response", done => {
//     const input = "how many repos does griselda have?";
//     this.witch.process(input).then(output => {
//       expect(this.parser.parse).toHaveBeenCalledWith(input);
//       expect(this.runner.run).toHaveBeenCalledWith(this.command);
//       expect(this.formatter.format).toHaveBeenCalledWith(this.response);
//       expect(output).toEqual(this.output);
//       done();
//     });
//   });
// });
