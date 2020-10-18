import {Command, flags} from '@oclif/command'
import * as parser from '@pgql/parse';

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ mammoth hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Hello);

    // So read all the migrations from the correct directory. Sort them and maybe even do a quick sanity check?

    // Parse the queries per migration and run the DDL statements through the simulator.

    // Then compare the simulator with the existing tables and create and alter the data definitions
    const result = parser.parseQuerySync(`
    CREATE TABLE foo (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      value integer
    );

    CREATE TABLE bar (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      foo_id uuid NOT NULL REFERENCES foo (id),
      name text NOT NULL,
      value integer
    );
    `);
    console.log(result);
  }
}
