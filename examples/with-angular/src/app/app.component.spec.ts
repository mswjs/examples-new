import { HttpClientModule } from '@angular/common/http'
import { render, screen } from '@testing-library/angular'
import { AppComponent } from './app.component'

describe('AppComponent', () => {
  it('receives a mocked response to a REST API request', async () => {
    await render(AppComponent, {
      imports: [HttpClientModule],
    })

    expect(await screen.findByText('Hello, John!')).toBeVisible()
  })
})
