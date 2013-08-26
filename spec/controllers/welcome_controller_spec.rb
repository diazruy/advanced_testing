require 'spec_helper'

describe WelcomeController do
  describe "#index" do
    let(:foos){[double(:foos)]}

    context "when passed an argument of active = 1" do
      it "assigns all the active, published foos" do
        Foo.stub_chain(:published, :active => foos)

        get :index, active: 1

        expect(assigns(:foos)).to eq(foos)
      end
    end

    context "when passed an argument of active = 0" do
      it "assigns all the inactive, published foos" do
        Foo.stub_chain(:published, :inactive => foos)

        get :index, active: 0

        expect(assigns(:foos)).to eq(foos)
      end
    end
  end
end
