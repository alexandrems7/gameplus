/* eslint-disable prettier/prettier */

import { UnprocessableEntityException } from "@nestjs/common";


export function handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1].trim();



 throw new UnprocessableEntityException(lastErrorLine || "Ops! Algum erro ocorreu ao executar a operação.");

  }
